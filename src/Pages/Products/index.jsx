import { useState } from "react";
import StatusCard from "../../Components/Dynamic/StatusCard";
import { products, productsCategories } from "../../Data/data";
import { Search, SearchX } from "lucide-react";
import ProductCard from "../../Components/Dynamic/ProductCard";

export default function Products() {
  const [selectedCategory ,setSelectedCategory] = useState("all")
  const [query ,setQuery] = useState("")

  const handleChange = ( event )=>{
    setQuery(event.target.value)
    console.log(query)
  }

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(query.toLowerCase().trim());

  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <section>
        <div className="my-10 px-2 flex flex-col gap-4">
          <StatusCard>
            كتالوج الإنتاج الفاخر 
          </StatusCard>

          <h2 className="text-3xl font-extrabold text-white flex gap-2">
           منتجاتنا
          </h2>

          <p className="text-(--secondary-card) text-md">
            نقدم حلول تصنيع احترافية للبناطيل والتيشرتات، مع اهتمام بالجودة والتفاصيل وإمكانية التصنيع حسب الطلب.
          </p>

          <div className="bg-(--backgroundcard) text-(--secondary-text) flex h-18 border border-transparent focus-within:border-(--primary) transition-colors duration-200">
            <div className="h-full w-15 flex items-center justify-center">
              <Search size={35}/>
            </div>
            <input onChange={handleChange} value={query} type="search" placeholder="ابحث عن منتج ..." className="flex-1 p-2 text-2xl h-full border-0 outline-0"/>
          </div>

          <div className="flex gap-5 px-2 items-center my-5">
            {productsCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`
                  px-4 py-2 rounded-lg transition cursor-pointer text-xl
                  ${
                    category.value === selectedCategory
                      ? "bg-(--primary) text-(--body)"
                      : "bg-(--backgroundcard) text-(--secondary-text) border border-(--primary)"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      <section>
        <div className="px-2 my-5 bg-(--lighterbackground) py-5"> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 my-3">
                { filteredProducts.length > 0 
                
                  ?
                    filteredProducts.map(product => (
                      <ProductCard product={product} key={product.id}/>
                    )) 
                    
                  :

                    (
                    <div className="col-span-full flex min-h-80 flex-col items-center justify-center text-center">
                      
                      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-(--primary-color)/30 bg-(--primary-color)/10">
                        <SearchX 
                          size={40} 
                          className="text-(--secondary-text)"
                        />
                      </div>

                      <h2 className="text-2xl font-bold text-white">
                        لم نجد ما تبحث عنه
                      </h2>

                      <p className="mt-2 max-w-md text-base text-(--secondary-text)">
                        لا توجد منتجات مطابقة لبحثك، حاول البحث باسم منتج آخر.
                      </p>

                      <span className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-(--secondary-text)">
                        جرّب كلمة بحث مختلفة
                      </span>

                    </div>
                  )
                }
            </div>
        </div>
      </section>
    </>
  )
}
