export default function AdminPanel() {
  return (
    <section class="admin">
      <h1>Admin Dashboard</h1>
      !-- CREATE PRODUCT --
      <div class="admin-form">
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
      <div class="admin-list">
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

          <tbody id="products-table">!-- dynamic --</tbody>
        </table>
      </div>
    </section>
  );
}
