async function loadCountries() {
	try {
		const response = await fetch("assets/json/          countries.json"); // Retirer l'espace pour désactiver l'erreur

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		let countries = await response.json();
		const countrySelect = document.getElementById("selectCountry");

		// Ajouter une option vide au début
		const emptyOption = document.createElement("option");
		emptyOption.value = "";
		emptyOption.textContent = "Sélectionnez un pays";
		countrySelect.appendChild(emptyOption);

		// Trier les pays par nom
		countries.sort((a, b) => a.name.localeCompare(b.name));

		countries.forEach((country) => {
			const option = document.createElement("option");
			option.value = country.name;
			option.textContent = country.name;
			countrySelect.appendChild(option);
		});
	} catch (error) {
		console.error("Erreur lors du chargement des pays:", error);
		displayError(
			"Erreur lors du chargement des pays. Veuillez réessayer plus tard.",
		);
	}
}

// Fonction pour afficher l'erreur dans l'alerte
function displayError(message) {
	const errorAlert = document.getElementById("errorAlert");
	errorAlert.textContent = message;
	errorAlert.style.display = "block";
}

// Appel de la fonction pour charger les pays au chargement de la page
document.addEventListener("DOMContentLoaded", loadCountries);
