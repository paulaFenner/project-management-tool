export default function Input({ label, textarea, ...props }) {
  return (
    <div>
      <label htmlFor=''>{label}</label>

      {textarea ? <textarea {...props} /> : <input {...props} />}
    </div>
  );
}
