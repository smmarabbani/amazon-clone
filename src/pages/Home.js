import React from "react";
import styled from "styled-components";
import {
  TopCarousel,
  carouselData,
  MultipleShowCaseCard,
  MultipleShowCaseData,
  SingleShowCaseCard,
  ItemCarousel,
  SignInFooter,
} from "../components";

const Home = () => {
  return (
    <Container>
      <TopCarousel data={carouselData} />
      {/* OnTop CarouselDiv */}
      <div className="onTopCarouselDiv">
        <div className="Mobile__Carousel">
          <ItemCarousel data="4 star rated & above | Refurbished products" />
        </div>
        <div className="cardContainer">
          <MultipleShowCaseCard data={MultipleShowCaseData[0]} />
          <MultipleShowCaseCard data={MultipleShowCaseData[1]} />
          <MultipleShowCaseCard data={MultipleShowCaseData[2]} />
          <SingleShowCaseCard
            title="Sign in for your best experience"
            button={true}
            buttonText="Sign in securely"
            buttonLink="/login"
          />
          <MultipleShowCaseCard data={MultipleShowCaseData[3]} />
          <MultipleShowCaseCard data={MultipleShowCaseData[4]} />
          <SingleShowCaseCard
            title="Pay your credit card bills on Amazon"
            button={false}
            footerLink="/"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
            footerLinkText="Pay Now"
          />
          <MultipleShowCaseCard data={MultipleShowCaseData[5]} />
          <MultipleShowCaseCard data={MultipleShowCaseData[6]} />
        </div>
        <div className="itemCarouselContainer">
          <ItemCarousel data="Frequently repurchased in Grocery" />
        </div>
        <div className="cardContainer">
          <MultipleShowCaseCard data={MultipleShowCaseData[7]} />
          <SingleShowCaseCard
            title="Effective dishwashing for Indian cooking"
            button={false}
            footerLink="/"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg"
            footerLinkText="See More"
          />
          <MultipleShowCaseCard data={MultipleShowCaseData[8]} />
          <SingleShowCaseCard
            title="Up to 50% off | Chimneys"
            button={false}
            footerLink="/"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg"
            footerLinkText="See More"
          />
          <MultipleShowCaseCard data={MultipleShowCaseData[7]} />
        </div>
        <div className="itemCarouselContainer">
          <ItemCarousel data="Frequently repurchased in Drugstore" />
        </div>

        <ItemCarousel data="4 star rated & above | Refurbished products" />

        <SignInFooter />
      </div>
      {/* OnTop CarouselDiv */}
    </Container>
  );
};

export default Home;

const Container = styled.section`
  background-color: var(--lightgray);
  /* padding-bottom: 1rem; */
  margin-top: 105px;
  .cardContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    justify-items: center;
    gap: 1.5rem;

    div:last-child {
      display: none;
    }
    @media (max-width: 1150px) {
      grid-template-columns: repeat(3, 1fr);
      div:last-child {
        display: block;
      }
    }
  }

  .onTopCarouselDiv {
    margin-top: -350px;
    z-index: 1;
    position: relative;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--lightgray));
    padding: 1rem 1rem;
    width: 100%;
  }

  /* Mobile Styling */
  .Mobile__Carousel {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
