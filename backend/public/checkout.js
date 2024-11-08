function formatCOP(value) {
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
        return 'Error';
    }
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(numericValue);
}

const stripe = Stripe('pk_test_51QIMhzGxHAwGCmaiOLeKBBKk0Hasi3p2zB86dyUIIYheh4L86hue9ShaiER8kukVKpf9IQOfwGsSG686G7iaNKe400z7rtq4AN');
const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
const submitButton = document.getElementById('submit-button');
const buttonText = document.getElementById('button-text');
const spinner = document.getElementById('spinner');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
        const clientSecret = await getClientSecret();
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: { name: 'Cliente' }
            },
        });

        if (error) {
            document.getElementById('card-errors').textContent = error.message;
        } else if (paymentIntent.status === 'succeeded') {
            alert('¡Pago exitoso!');
            localStorage.removeItem('cartTotal');
            localStorage.removeItem('productos-en-carrito'); 
            window.location.href = 'pago-exitoso.html';
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
});

async function getClientSecret() {
    const cartTotal = localStorage.getItem('cartTotal') || '0';
    const amount = parseInt(cartTotal.replace(/[^\d]/g, ''));


    const response = await fetch('https://mi-tienda-backend.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
    });

    const data = await response.json();
    return data.clientSecret;
}


    const data = await response.json();
    return data.clientSecret;
}

function setLoading(isLoading) {
    submitButton.disabled = isLoading;
    buttonText.classList.toggle('hidden', isLoading);
    spinner.classList.toggle('hidden', !isLoading);
}
