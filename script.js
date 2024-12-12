function calculateAverageExperience() {
    const currentDate = new Date();
    let totalYears = 0;

    for (let i = 1; i <= 5; i++) {
        const dateInput = document.getElementById(`date${i}`);
        const hireDate = new Date(dateInput.value);

        if (!isNaN(hireDate)) {
            const diffInTime = currentDate - hireDate;
            const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
            const years = diffInDays / 365;
            totalYears += years;
        }
    }

    const averageExperience = Math.floor(totalYears / 5);
    document.getElementById('result').textContent = `Середній стаж роботи: ${averageExperience} років`;
}