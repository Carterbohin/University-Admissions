<script>
function toggleOtherSchoolInput() {
    var schoolSelect = document.getElementById("schoolSelect");
    var otherSchoolLabel = document.getElementById("otherSchoolLabel");
    if (schoolSelect.value === "other") {
        otherSchoolLabel.style.display = "inline";
    } else {
        otherSchoolLabel.style.display = "none";
    }
}
</script>