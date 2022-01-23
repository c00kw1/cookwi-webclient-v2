import styles from "./PrincipalPageImage.module.css";

const PrincipalPageImage = (props) => {
  return (
    <div className={styles.principalPageImage}>
      <img src={props.src} />
    </div>
  );
};

export default PrincipalPageImage;
