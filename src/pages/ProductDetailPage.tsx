import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '@/services/productsApi';
import { useCart } from '@/components/cart/CartProvider';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductImage from '@/components/product-detail/ProductImage';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductOptions from '@/components/product-detail/ProductOptions';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import TopNavbar from '@/components/TopNavbar';
import BrandNavbar from '@/components/BrandNavbar';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import BrandNavbarSection from '@/components/productsPages/BrandNavbarSection';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('Orange');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  const product = products?.find(p => p.id === Number(id));
  const relatedProducts = products?.filter(p => 
    p.id !== Number(id) && p.material === product?.material
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Veuillez sélectionner une taille",
        description: "Une taille doit être sélectionnée avant d'ajouter au panier",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      quantity: quantity,
      image: product!.image,
    });

    toast({
      title: "Produit ajouté au panier",
      description: `${quantity}x ${product!.name} (${selectedSize}) ajouté avec succès`,
      style: {
        backgroundColor: '#700100',
        color: 'white',
        border: '1px solid #590000',
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#700100]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopNavbar />
      <BrandNavbarSection />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 mt-[10px] lg:mt-[20px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#700100] transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Retour aux produits</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-[#700100] text-[#700100]' : 'text-gray-400'}`} />
              </button>
              <ProductImage image={product.image} name={product.name} />
            </div>

            <div className="space-y-8">
              <ProductInfo 
                name={product.name}
                description={product.description}
                price={product.price}
              />

              <div className="h-px bg-gray-200" />

              <ProductOptions
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                quantity={quantity}
                setQuantity={setQuantity}
                onAddToCart={handleAddToCart}
                stock={10}
              />
            </div>
          </div>

          {relatedProducts && relatedProducts.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-16 mb-8"
            >
              <h2 className="text-2xl font-['WomanFontBold'] text-[#700100] mb-8">
                Produits similaires
              </h2>
              <RelatedProducts products={relatedProducts} />
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;