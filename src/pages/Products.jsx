import ProductData from '../data/ProductData'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useCart } from '../contexts/CartProvider';
const Products = () => {
    const { dispatch } = useCart();

    const addProduct = (product) => {
        const newProduct = {
            id: product.id,
            rname: product.rname,
            imgdata: product.imgdata,
            price: product.price
        }
        dispatch({ type: 'ADD_PRODUCT', payload: newProduct })

    }

    return (
        <div className='product_area'>
            <div className="container">
                <div className="product_wrapper">
                    {
                        ProductData.map((product) => (
                            <div className='single_product' key={product.id}>
                                <div className="product_item">
                                    <div className="product_img">
                                        <img src={product.imgdata} className='img-fluid' alt="" />
                                    </div>
                                    <div className="product_info">
                                        <h4>{product.rname}</h4>
                                        <p><CurrencyRupeeIcon /> {product.price}</p>
                                        <span>Rating: {product.rating}</span>
                                        <button className='btn btn-primary w-100' onClick={() => addProduct(product)}>Add Product</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products