export default function AdminProductCreateEdit({product, onCancel}) {
  
  return (
    <div className="admin-form-modal">
      <h2>{product ? "Edit Product" : "Create Product"}</h2>
      <form>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="price" placeholder="Price" />
        <input type="text" name="imageUrl" placeholder="Image URL" />
        <textarea name="description" placeholder="Description"></textarea>

        <div className="form-actions">
          <button type="submit">{product ? "Save Changes" : "Create"}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
