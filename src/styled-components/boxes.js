import { styled } from "@storybook/theming";

export const FlexedBox = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const IconBox = styled.div`
  width: 18px;
  height: 18px;

  &.tooltip {
    position: relative;
    &:hover {
      cursor: pointer;
      > [tooltip] {
        visibility: visible;
        opacity: 1;
      }
    }
    > [tooltip] {
      user-select: none;
      pointer-events: none;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      font-size: .75rem;
      line-height: 1;
      min-width: 3em;
      max-width: 21em;
      width: max-content;
      background: rgba(51, 51, 51, 0.7);
      color: white;
      padding: 8px 10px;
      z-index: 1001;
      left: 22px;
      top: -6px;

    }
  }
`;
