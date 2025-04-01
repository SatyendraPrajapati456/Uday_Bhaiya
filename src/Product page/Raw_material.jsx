import React, { useState } from "react";
import "./Raw_material.css"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";

const ProductSubmissionForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      console.log("Submitted product:", formData);
      setSubmitMessage("Product submitted successfully!");
      setIsSubmitting(false);

      // Clear form after submission
      setFormData({
        productName: "",
        productDescription: "",
        price: "",
        image: null,
      });
      setPreviewImage(null);
    }, 1500);
  };

  let navigate = useNavigate();
  return (
    <div className="form-container">
      <h2 className="form-title">Add New Product</h2>

      {submitMessage && <div className="success-message">{submitMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName" className="form-label">
            Product Name*
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productDescription" className="form-label">
            Product Description*
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            required
            rows="4"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price ($)*
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Product Image*
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="form-input"
          />

          {previewImage && (
            <div className="image-preview-container">
              <p className="image-preview-label">Preview:</p>
              <img
                src={previewImage}
                alt="Product preview"
                className="image-preview"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={isSubmitting ? "submit-button disabled" : "submit-button"}
        >
          {isSubmitting ? "Submitting..." : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductSubmissionForm;
