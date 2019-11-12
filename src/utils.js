import { withInfo } from "@storybook/addon-info";
const wInfoStyles = {
  header: {
    h1: {
      marginRight: "20px",
      fontSize: "25px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: "inline",
      color: "#999"
    },
    infoBody: {
      backgroundcolor: "#eee",
      padding: "0px 5px",
      lineHeight: "2"
    }
  }
};

export const wInfo = () => ({
  inline: false,
  source: false,
  styles: wInfoStyles,
  header: true
});
