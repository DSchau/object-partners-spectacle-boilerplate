// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import { createTheme } from "spectacle-theme";
import { ContentSlide, TitleSlide } from "spectacle-theme/dist/components";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../../assets/city.jpg"),
  kat: require("../../assets/kat.png"),
  logo: require("../../assets/formidable-logo.svg"),
  markdown: require("../../assets/markdown.png")
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <TitleSlide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" size={2} fit bold>
            open the src/presentation/index.js file to get started
          </Text>
        </TitleSlide>
        <ContentSlide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </ContentSlide>
        <ContentSlide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </ContentSlide>
        <ContentSlide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </ContentSlide>
      </Deck>
    );
  }
}
