import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const MtbNewsItemWrapper = styled.div`
 display:flex;
 justify-content:center;
`
const MtbNewItem = styled.div`
    width:300px;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
`
const MtbNewsImage = styled.img`
    max-width:100%;
`
const NewsItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpMtbNews {
                edges {
                  node {
                    id
                    content
                    excerpt
                    slug
                    title
                    featured_media {
                      source_url
                    }
                  }
                }
              }
          }              
        `}render = {props=>
            (<MtbNewsItemWrapper>
            {props.allWordpressWpMtbNews.edges.map(newsItem => (
            <MtbNewItem key={newsItem.node.id}>
                <h2>{newsItem.node.title}</h2>
                <MtbNewsImage src={newsItem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html:newsItem.node.excerpt}} />
                <Link to={`/mtb_news/${newsItem.node.slug}`}>
                    Read more...
                </Link>
            </MtbNewItem>
            ))}
            </MtbNewsItemWrapper>
        )}/>
    )
}

export default NewsItems;