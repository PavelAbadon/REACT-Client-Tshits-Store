export default function AdminPanel() {
  return (
    <section className="admin">
      <h1>Admin Dashboard</h1>
      !-- CREATE PRODUCT --
      <div className="admin-form">
        <h2>Create Product</h2>

        <form id="create-form">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Image URL" />
          <textarea placeholder="Description"></textarea>

          <button>Create</button>
        </form>
      </div>
      !-- PRODUCTS LIST --
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

          <tbody id="products-table">тук ще има нещо динамично</tbody>
        </table>
      </div>
    </section>
  );
}
