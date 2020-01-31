import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const BasicInfoWrapper = styled.div`
    display: flex;
    color:white ;
    padding:10px 10px 10px 0;
    width:60%;
`

const SiteTitle = styled.div`
    font-weight:bold;
    padding:15px 0 0 10px;
`

const Sitelogo = styled.div`
    width:50px;
    height:50px;
    margin-left:10px;
    background-size:50px 50px;
    background-repeat: no-repeat;
    background-image:url(https://gorillalogic.com/wp-content/uploads/2018/01/GL_Logo_SuperG_Blk-140x140.png) !important;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata{
             edges{
            node{
              name
              description
            }
          } 
        }
      }
      
    `
    } render = {props => (
        <BasicInfoWrapper>
            <Sitelogo>
                
            </Sitelogo>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            
        </BasicInfoWrapper>
    )}/>
);

export default SiteInfo;