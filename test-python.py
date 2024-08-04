orders = []

async def add_order():
  data = request.get_json()
  order_id = data['order_id']
  customer_id = data['customer_id']
  products = json.load(data['product_arr'])
  # product_id = data['product_id']
  # quantity = data['quantity']
  # price = data['price']



  order = {
    order_id:order_id,
    customer_id:customer_id,
    products: products
    # product_id:product_id,
    # quantity: quantity,
    # price:price
  }


  # collected data for order
  orders.append(order)

  # loader
  await asyncio.sleep(3)

  total_value = 0 
  for order in orders:
    for product in order.products:
      total_value += sum(product.quantity * order.price) 
    
  
  return jsonify({
    'total_value': total_value
  })



