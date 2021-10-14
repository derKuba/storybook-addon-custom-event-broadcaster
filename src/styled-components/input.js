import { styled } from "@storybook/theming";

const inputStyling = {
  appearance: "none",
  border: "0 none",
  display: "block",
  margin: "0",
  background: "#FFFFFF",
  padding: "6px 10px",
  fontSize: "13px",
  position: "relative",
  color: "#333333",
  boxShadow: "rgb(0 0 0 / 10%) 0 0 0 1px inset",
  borderRadius: "4px",
  lineHeight: " 20px",
  flex: "1",
  textAlign: "left",
  overflow: "visible",
  maxHeight: "400px",
};

export const StyledInput = styled.input(inputStyling);

export const StyledTextarea = styled.textarea(inputStyling);
