/**
 * FLAWLESS DANCE & FITNESS STUDIO (FDFS)
 * Interactive UI & Liquid Glass Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close when clicking nav links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // 2. Class Hub Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const classCards = document.querySelectorAll('.class-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      classCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Dynamic WhatsApp Inquiry Form Submission
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const branch = document.getElementById('formBranch').value;
      const classType = document.getElementById('formClass').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      // WhatsApp target number: 918850120018
      const whatsappNumber = '918850120018';
      
      let text = `*New Website Inquiry - Flawless Dance & Fitness Studio*%0A%0A`;
      text += `👤 *Name:* ${encodeURIComponent(name)}%0A`;
      text += `📱 *Phone:* ${encodeURIComponent(phone)}%0A`;
      text += `📍 *Preferred Branch:* ${encodeURIComponent(branch)}%0A`;
      text += `💃 *Interested Class:* ${encodeURIComponent(classType)}%0A`;
      if (message) {
        text += `💬 *Note:* ${encodeURIComponent(message)}%0A`;
      }
      text += `%0A_Sent via flawlessdance.in_`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      inquiryForm.reset();
      const successNotice = document.getElementById('formSuccess');
      if (successNotice) {
        successNotice.style.display = 'block';
        setTimeout(() => {
          successNotice.style.display = 'none';
        }, 5000);
      }
    });
  }

  // 4. Studio Location Quick Directions Trigger
  window.openMap = function(branch) {
    if (branch === 'sector16') {
      window.open('https://maps.app.goo.gl/bWJzXbNUFJLfuCjV6', '_blank');
    } else if (branch === 'sector5') {
      window.open('https://maps.app.goo.gl/dwS4XrbeRN7YVjvH9', '_blank');
    }
  };

  // 5. Video Player Modal / Link to YouTube
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.getAttribute('data-youtube') || 'https://youtube.com/@flawlessdancefitnessstudio3284';
      window.open(videoUrl, '_blank');
    });
  });

  // 6. Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('FDFS Dance & Fitness Studio Live Liquid Glass Theme Initialized.');
});
