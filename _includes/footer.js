export default function Footer() {
  const d = new Date();
  return (
    <footer>
      <p>&copy; {d.getFullYear()} | footer</p>
    </footer>
  );
}
