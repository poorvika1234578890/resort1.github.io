
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      // Hide all other answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

      // Toggle current answer
      if (!isVisible) {
        answer.style.display = 'block';
      }
    });
  });
});
