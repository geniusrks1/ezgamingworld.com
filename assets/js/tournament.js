function showCategory(category) {
    const categories = ['upcoming', 'live', 'completed', 'achievements'];
    categories.forEach(cat => {
      const categorySection = document.getElementById(cat);
      if (cat === category) {
        categorySection.style.display = 'block';
      } else {
        categorySection.style.display = 'none';
      }
    });
    
    const activeLi = document.querySelector('.active');
    activeLi.classList.remove('active');
    
    const selectedLi = document.querySelector(`li[onclick="showCategory('${category}')"]`);
    selectedLi.classList.add('active');
  }
  
  