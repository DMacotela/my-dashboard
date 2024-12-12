import { CartCounter } from "@/shopping-cart/components/CartCounter";


export const metadata = {
 title: 'Counter Page',
 description: 'Un simple contador de productos en el carrito',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-4xl font-bold text-blue-900">Productos en el carrito</span>
     <CartCounter value={10} />
    </div>
  );
}