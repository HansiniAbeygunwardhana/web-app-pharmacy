import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrescriptionService from "../../Services/PrescriptionService";

const PrescriptionDetailsPage = () => {
  const { prescriptionId } = useParams();
  const [prescriptionDetails, setPrescriptionDetails] = useState(null);

  useEffect(() => {
    // Fetch prescription details based on prescriptionId
    PrescriptionService.getPrescriptionDetailsById(prescriptionId)
      .then((response) => {
        setPrescriptionDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prescription details:", error);
      });
  }, [prescriptionId]);

  // Render prescription details here...
  return (
    <div>
      {/* Render prescription details content */}
      {prescriptionDetails && (
        <div>
          {/* Display the prescription details using prescriptionDetails */}
        </div>
      )}
    </div>
  );
};

export default PrescriptionDetailsPage;
