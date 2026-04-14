import { useState, useEffect} from "react";
import AdminProductCreateEdit from "./AdminProductCreateEdit";

export default function AdminPanel() {
    const [tShirts, setTshirts] = useState([]);
    //
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // GET всички тениски при първоначално зареждане
  useEffect(() => {
    const allTshirts = async () => {
      try {
        const resposne = await fetch("http://localhost:3030/data/catalog"); 
        const result = await resposne.json();
        setTshirts(result);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    allTshirts();
  }, []);

  return (
    <section className="admin">
      <h1>Admin Dashboard</h1>
        <button
            className="btn-add"
            onClick={() => {
                setSelectedProduct(null); 
                setShowForm(true);
            }}
            >
            Add New T-Shirt
        </button>

      <div className="admin-list">
        <h2>All Products</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tShirts.length === 0 ? (
              <tr>
                <td colSpan={4}>No products found</td>
              </tr>
            ) : (
              tShirts.map((tShirt) => (
                <tr key={tShirt._id}>
                  <td>
                    <img src={tShirt.imageUrl} alt={tShirt.title} width={50} />
                  </td>
                  <td>{tShirt.title}</td>
                  <td>{tShirt.price}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showForm && (
        <AdminProductCreateEdit
            product={selectedProduct}
            onCancel={() => setShowForm(false)}
        />
        )}
    </section>
  );
}
