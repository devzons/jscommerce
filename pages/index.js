import {getProducts} from '../lib/moltin'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const Home = (props) => (
  <Layout title='Home'>
    <ProductList {...props} />
  </Layout>
)

Home.getInitialProps = async () => {
  const products = await getProducts()

  return {
    products
  }
}

export default Home