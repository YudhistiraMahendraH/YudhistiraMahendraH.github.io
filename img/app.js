
  document.addEventListener('alpine:init', () => {
    Alpine.data('home', () => ({
      items: [
          { id: 10, name: 'ikanhias1', img: 'ikanhias3.jpg', price: 76255 },
          { id: 13, name: 'ikanhias2', img: 'ikanhias6.jpg', price: 76255 },
          { id: 22, name: 'ikanhias3', img: 'ikanhias8.jpg', price: 76255 },
          { id: 23, name: 'ikanhias4', img: 'ikanhias9.jpg', price: 76255 },
          
      ]
  }));
      Alpine.data('ikanairlaut', () => ({
          items: [
              { id: 1, name: 'ikan1', img: 'ikan1.jpeg', price: 76255 },
              { id: 2, name: 'ikan2', img: 'ikan2.jpeg', price: 76255 },
              { id: 3, name: 'ikan3', img: 'ikan3.jpeg', price: 76255 },
              { id: 4, name: 'ikan4', img: 'ikan4.jpeg', price: 76255 },
              { id: 5, name: 'ikan5', img: 'ikan5.jpeg', price: 76255 },
              { id: 6, name: 'ikan6', img: 'ikan6.jpeg', price: 76255 },
              { id: 7, name: 'ikan7', img: 'ikan7.jpeg', price: 76255 },
  
          ]
      }));
      Alpine.data('ikanhias', () => ({
          items: [
              { id: 8, name: 'ikanhias1', img: 'ikanhias1.jpg', price: 76255 },
              { id: 9, name: 'ikanhias2', img: 'ikanhias2.jpg', price: 76255 },
              { id: 10, name: 'ikanhias3', img: 'ikanhias3.jpg', price: 76255 },
              { id: 11, name: 'ikanhias4', img: 'ikanhias4.jpg', price: 76255 },
              { id: 12, name: 'ikanhias5', img: 'ikanhias5.jpg', price: 76255 },
              { id: 13, name: 'ikanhias6', img: 'ikanhias6.jpg', price: 76255 },
              { id: 14, name: 'ikanhias7', img: 'ikanhias7.jpg', price: 76255 },
              
          ]
      }));
      Alpine.data('alatbantu', () => ({
          items: [
              { id: 15, name: 'Aquarium1', img: 'aquarium1.jpg', price: 76255 },
              { id: 16, name: 'Aquarium2', img: 'aquarium2.jpg', price: 76255 },
              { id: 17, name: 'Aquarium3', img: 'aquarium3.jpg', price: 76255 },
              { id: 18, name: 'Aquarium3', img: 'aquarium4.jpg', price: 76255 },
              { id: 19, name: 'Aquarium4', img: 'aquarium5.jpg', price: 76255 },
              { id: 20, name: 'Makanan Ikan', img: 'makan1.jpg', price: 76255 },
              { id: 21, name: 'Makanan Ikan', img: 'makan2.jpg', price: 76255 },
              
          ]
      }));



    Alpine.store('cart', {
      items: [],
      total: 0,
      quantity: 0,
      add(newItem) {
        const cartItem = this.items.find(item => item.id === newItem.id);
    
        if (!cartItem) {
          this.items.push({ ...newItem, quantity: 1, total: newItem.price });
          this.quantity++;
          this.total += newItem.price;
        } else {
          cartItem.quantity++;
          cartItem.total = cartItem.price * cartItem.quantity;
          this.quantity++;
          this.total += cartItem.price;
        }
      },
      remove(id) {
        const cartItem = this.items.find(item => item.id === id);

        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          cartItem.total = cartItem.price * cartItem.quantity;
          this.quantity--;
          this.total -= cartItem.price;
        } else if (cartItem.quantity === 1) {
          this.items = this.items.filter(item => item.id !== id);
          this.quantity--;
          this.total -= cartItem.price;
        }
      }
    });
  });

  // konversi ke rupiah
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkout-button').addEventListener('click', function() {
        const form = document.getElementById('checkoutForm');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const detail = document.getElementById('detail').value;

        // Validasi form
        if (form.checkValidity()) {
            // Nomor WhatsApp tujuan
            const whatsappNumber = '6287884996054'; // Ganti dengan nomor tujuan Anda

            // Pesan WhatsApp
            const message = `Saya ingin melakukan checkout untuk produk yang saya beli.\n\nDetail Customer:\n\nNama: ${name}\nEmail: ${email}\nPhone: ${phone}\ndetail: ${detail}\n\n\nTerima Kasih.`;

            // URL untuk redirect ke WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            // Redirect ke WhatsApp
            window.location.href = whatsappUrl;
        }  else {
          // Jika form tidak valid, tampilkan pesan kesalahan
          document.getElementById('error-message').style.display = 'block';
      }
    });
});
