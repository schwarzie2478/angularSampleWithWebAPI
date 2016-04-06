﻿using System;
using System.Collections.Generic;

namespace SignalROwinIISApplication.DomainModel
{
    public class ProductsRepository : IProductsRepository
    {
        #region IProductsRepository Members

        public IList<Product> GetAllProducts()
        {
            return ProductsDataStore.Products;
        }


        public void Insert(Product product)
        {
            ProductsDataStore.Insert(product);
        }

        public void Update(Product product)
        {
            ProductsDataStore.Update(product);
        }

        public void Delete(int productId)
        {
            ProductsDataStore.Delete(productId);
        }

        public Product GetProduct(int productId)
        {
            return ProductsDataStore.Product(productId);
        }

        #endregion
    }
}