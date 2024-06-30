import { IProduct } from "../../interfaces/product"
import Button from "../../shared/ui/Button"
import Image from "../../shared/ui/Image"
import Modal from "../../shared/ui/Modal"
import { textSlicer } from "../../utils/functions"

interface IProps {
  product: IProduct
}


function ProductCard({ product }: IProps) {
  const {title, description, price, image,category } = product
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border-2 border-e-red-50 p-2 flex flex-col">
      <Image src={image} alt="img" className="rounded-md mb-2"  />
      <h3>{title}</h3>
      <p>
        {textSlicer(description)}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer"/>
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image src={category.image} alt={category.name} className="w-10 h-10 rounded-full object-center"  />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700">Edit</Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
      <Modal/>
    </div>
  )
}

export default ProductCard
