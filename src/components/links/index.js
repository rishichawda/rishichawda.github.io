import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const Wrapper = styled.section`
  ${tw`w-screen`}
  min-height: fit-content;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  padding-bottom: 5rem;
  background-color: rgb(250, 250, 250);
  color: rgb(61, 61, 61);
  p {
    font-size: 1.1rem;
    color: rgb(61, 61, 61);
    font-weight: 400;
  }
  a {
    position: relative;
    ${tw`cursor-pointer`}
    font-size: 1.1rem;
    text-decoration: none;
    color: rgb(61, 61, 61);
    &::after {
      content: '';
      display: block;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20%;
      position: absolute;
      background: rgba(62, 78, 136, 0.25);
      transition: height 0.25s ease;
    }
    &:hover {
      &::after {
        height: 100%;
      }
    }
  }
`

const Section = styled.div`
  ${tw`flex xs:flex-col md:flex-col lg:flex-row justify-between items-center`}
  color: rgb(61, 61, 61);
`

const Title = styled.h1`
  color: rgb(25, 25, 25);
  font-size: 1.24em;
  font-weight: 400;
  line-height: 2.5rem;
  margin: 0 auto;
  color: rgb(61, 61, 61);
`

const List = styled.ul`
  font-size: 1.1em;
  color: rgb(61, 61, 61);
`

const ListItem = styled.li`
  ${tw`my-4 cursor-pointer`}
  color: rgb(61, 61, 61);
  a {
    position: relative;
    ${tw`cursor-pointer`}
    &::after {
      content: '';
      display: block;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 21%;
      position: absolute;
      background: rgba(62, 78, 136, 0.25);
      transition: height 0.25s ease;
    }
    text-decoration: none;
    letter-spacing: 0.02em;
    line-height: 1.5em;
    color: rgb(25, 25, 25);
    &:hover {
      &::after {
        height: 100%;
      }
    }
  }
`

const Container = styled.div`
  ${tw`w-full mx-auto py-32 pt-0 px-4`}
  max-width: 920px;
`

export default function Links() {
  return (
    <Wrapper>
      <Container>
        <Title>Want to know more about me? Here's some links to get started with</Title>
        <Section>
          <List>
            <ListItem>
              <Link to="/projects">Open Source Projects.</Link> 👨🏻‍💻
            </ListItem>
            <ListItem>
              <Link to="/faq">Stuff that I use.</Link> 🛠️
            </ListItem>
            <ListItem>
              <Link to="/articles">I write blogs!</Link> ✍🏻
            </ListItem>
            <ListItem>
              <Link to="/reads">A bunch of quotes and snippets.</Link> 📚
            </ListItem>
          </List>
        </Section>
        <p>
          You can reach out to me through my <Link to="/">social media profiles</Link> too!
        </p>
      </Container>
    </Wrapper>
  )
}
