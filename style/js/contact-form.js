document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact__form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(this);
        
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            if (data.ok) {
                document.querySelector('.contact__response--success').style.display = 'block';
                document.querySelector('.contact__response--error').style.display = 'none';
                this.reset();
            } else {
                document.querySelector('.contact__response--error').style.display = 'block';
                document.querySelector('.contact__response--success').style.display = 'none';
            }
        }).catch(error => {
            document.querySelector('.contact__response--error').style.display = 'block';
            document.querySelector('.contact__response--success').style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact__form');
    const successMessage = document.querySelector('.contact__response--success');
    const errorMessage = document.querySelector('.contact__response--error');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset();
            } else {
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        });
    });
});
