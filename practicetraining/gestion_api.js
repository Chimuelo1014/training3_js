const url = 'http://localhost:3000/products';

// Validación
function validateProduct(product) {
  if (!product.name || typeof product.name !== 'string') {
    console.error("Invalid product data: name is required.");
    return false;
  }

  if (typeof product.price !== 'number') {
    console.error("Invalid product data: price must be a number.");
    return false;
  }

  return true;
}

// ✅ GET - Obtener todos los productos
function getProducts() {
  fetch(url)
    .then(res => res.json())
    .then(data => console.log("Products:", data))
    .catch(error => console.error("Error fetching products:", error));
}

// ✅ POST - Crear producto
function createProduct(product) {
  if (!validateProduct(product)) return;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => console.log("Product created:", data))
    .catch(error => console.error("Error creating product:", error));
}

// ✅ PUT - Actualizar producto (ID puede ser texto)
function updateProduct(id, newData) {
  if (!id || typeof id !== 'string') {
    console.error("Invalid ID.");
    return;
  }

  if (!validateProduct(newData)) return;

  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  })
    .then(res => res.json())
    .then(data => console.log("Product updated:", data))
    .catch(error => console.error("Error updating product:", error));
}

// ✅ DELETE - Eliminar producto (ID puede ser texto)
function deleteProduct(id) {
  if (!id || typeof id !== 'string') {
    console.error("Invalid ID.");
    return;
  }

  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
    .then(() => console.log(`Product with ID '${id}' deleted.`))
    .catch(error => console.error("Error deleting product:", error));
}
