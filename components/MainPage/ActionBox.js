import React from "react";
import styled from "styled-components";
import { H3 } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ActionBox = ({ img, title, text, href, lang, id }) => {
  return (
    <div className="action-box">
      <div className="action-box-img-wrapper">
        <img src={img} alt="" />
      </div>

      <div className="title-wrapper">
        <h3 className="styled-h3">{title}</h3>
      </div>
      <div className="action-p-wrapper">
        <p>{text}</p>
      </div>
      <div className="action-link-wrapper">
        <Link href={href}>
          <a className="styled-link">
            {lang ? "Dowiedz się więcej" : "Learn more"}{" "}
            <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
          </a>
        </Link>
      </div>
    </div>
  );
};

const Box = styled.div`
  min-width: 250px;
  width: 300px;
  padding: 1em;
  margin: 1em;
  box-shadow: 0px 0px 10px #0000001c;
`;
const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  height: 60px;
`;

const PWrapper = styled.div`
  margin-top: 43px;
  height: 150px;
  @media screen and (max-width: 500px) {
    height: 180px;
  }
`;

const LinkWrapper = styled.div`
  height: 40px;
`;

const StyledImg = styled.img`
  max-width: 100px;
  width: 100%;
`;


const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export default ActionBox;
