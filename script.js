// Función para manejar las animaciones al hacer scroll
function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const featureCards = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');
    const mockupItems = document.querySelectorAll('.mockup-item');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
  
    // Observar secciones
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Observar tarjetas de características
    featureCards.forEach(card => {
      observer.observe(card);
    });
  
    // Observar pasos
    steps.forEach(step => {
      observer.observe(step);
    });
  
    // Observar mockups
    mockupItems.forEach(mockup => {
      observer.observe(mockup);
    });
  }
  
  // Efecto parallax suave para los mockups
  function handleParallax() {
    const mockups = document.querySelectorAll('.phone-frame');
    
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mockups.forEach(mockup => {
        const rect = mockup.getBoundingClientRect();
        const mockupCenterX = rect.left + rect.width / 2;
        const mockupCenterY = rect.top + rect.height / 2;
        
        const deltaX = (clientX - mockupCenterX) / 30;
        const deltaY = (clientY - mockupCenterY) / 30;
        
        mockup.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
      });
    });
  }
  
  // Manejo del formulario
  document.getElementById('waitlist-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    // Simular envío con feedback visual
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = '¡Gracias por unirte!';
      form.reset();
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    }, 1500);
  });
  
  // Smooth scroll para los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Inicializar todas las funcionalidades cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    handleParallax();
  });