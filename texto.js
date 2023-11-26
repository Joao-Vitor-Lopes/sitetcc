function showTopic(topicId) {
    // Selecionar o tópico clicado
    const selectedTopic = document.getElementById(topicId);

    // Verificar se o tópico está visível
    const isVisible = selectedTopic.style.display === 'block';

    // Esconder todos os tópicos
    const allTopics = document.querySelectorAll('.topic-info');
    allTopics.forEach(topic => {
        topic.style.display = 'none';
    });

    // Se o tópico não estava visível, mostrar; caso contrário, esconder
    selectedTopic.style.display = isVisible ? 'none' : 'block';
}


