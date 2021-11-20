registerLayout(
  "block-like",
  class extends Layout {
    static blockifyChildren = true;
    static inputProperties = super.inputProperties;
    *layout(space, children, styleMap) {
      const inlineSize = resolveInlineSize(space, styleMap);
      const bordersAndPadding = resolveBordersAndPadding(
        constraintSpace,
        styleMap
      );
      const scrollbarSize = resolveScrollbarSize(constraintSpace, styleMap);
      const availableInlineSize =
        inlineSize -
        bordersAndPadding.inlineStart -
        bordersAndPadding.inlineEnd -
        scrollbarSize.inline;
      const availableBlockSize =
        resolveBlockSize(constraintSpace, styleMap) -
        bordersAndPadding.blockStart -
        bordersAndPadding.blockEnd -
        scrollbarSize.block;
      const childFragments = [];
      const childConstraintSpace = new ConstraintSpace({
        inlineSize: availableInlineSize,
        blockSize: availableBlockSize,
      });
      let maxChildInlineSize = 0;
      let blockOffset = bordersAndPadding.blockStart;
      for (let child of children) {
        const fragment = yield child.layoutNextFragment(childConstraintSpace);
        // 這段控制 Layout 下的 children 要 inline 排列
        // fragment 應該就是前述的 Box Tree API 內提到的 fragment
        fragment.blockOffset = blockOffset;
        fragment.inlineOffset = Math.max(
          bordersAndPadding.inlineStart,
          (availableInlineSize - fragment.inlineSize) / 2
        );
        maxChildInlineSize = Math.max(
          maxChildInlineSize,
          childFragments.inlineSize
        );
        blockOffset += fragment.blockSize;
      }
      const inlineOverflowSize =
        maxChildInlineSize + bordersAndPadding.inlineEnd;
      const blockOverflowSize = blockOffset + bordersAndPadding.blockEnd;
      const blockSize = resolveBlockSize(
        constraintSpace,
        styleMap,
        blockOverflowSize
      );
      return {
        inlineSize: inlineSize,
        blockSize: blockSize,
        inlineOverflowSize: inlineOverflowSize,
        blockOverflowSize: blockOverflowSize,
        childFragments: childFragments,
      };
    }
  }
);
