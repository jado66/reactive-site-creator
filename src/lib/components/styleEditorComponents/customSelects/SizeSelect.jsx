import Select from "react-select";

export default function SizeSelect(props) {
  const options = [
    { label: "Largest (d1)", value: "display-1", size: "5rem" },
    { label: "Larger (d2)", value: "display-2", size: "4.5rem" },
    { label: "Large (d3)", value: "display-3", size: "4rem" },
    { label: "Medium Large (d4)", value: "display-4", size: "3.5rem" },
    { label: "Medium (d5)", value: "display-5", size: "3rem" },
    { label: "Medium Small (d6)", value: "display-5", size: "2.5rem" },
    { label: "Small (d7)", value: "display-6", size: "2.0rem" },
    { label: "Smaller (d8)", value: "display-7", size: "1.5rem" },
    { label: "Smallest (d9)", value: "display-8", size: "1rem" }
  ];

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.data.size
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "1.5rem"
    })
  };

    return (
      <div style={{minWidth:"250px", textAlign:"left"}} className = "flex-grow-1">
        <Select myFontSize="20px" options={options} styles={styles} />
      </div>
    );
  
}

