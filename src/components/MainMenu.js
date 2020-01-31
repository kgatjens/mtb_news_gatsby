import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

import styled from 'styled-components';
import BasicInfo from './BasicInfo';


const MainMenuWrapper = styled.div`
    display: flex;
    background-color:#ccc;
`

const MainMenuInner = styled.div`
    max-width:960px;
    margin: 0 auto;
    display:flex;
    width:960px;
    height:100%;
    
`

const Nav = styled.div`
    float:left;
    padding-top:25px;
    width:40%;
    padding-right:10px;
`

const MenuItem = styled(Link)`
    color:white;
    display: inline-block;
    padding-left:15px;
    float:right;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter:{
         name:{
          eq: "Main Navigation"
        } 
        }) {
          edges {
            node {
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
      
    `} render={props=>(
        <MainMenuWrapper>
            <MainMenuInner>
            <BasicInfo />
            <Nav>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>(
                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                    {item.title}
                </MenuItem>
            ))}
            </Nav>
            </MainMenuInner>
        </MainMenuWrapper>
    )} />
);

export default MainMenu;