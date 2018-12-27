import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import {Menu, Container, Image } from 'semantic-ui-react'

Router.onRouteChangeState = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

export default () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
    </Head>
    <Menu inverted fixed="top" size="huge">
      <Container text>
        <Link href="/" prefetch passHref>
          <Menu.Item as ='a' header>
            <Image 
              size="mini"
              src="/static/moltin.svg"
              style={{marginRight: '1.5em'}}
            />
            JS Commerce
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  </React.Fragment>
)