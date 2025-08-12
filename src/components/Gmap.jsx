// Gmap.jsx
export default function Gmap() {
  return (
    <div className="bg-white p-4 rounded shadow w-full h-[400px]">
      <h3 className="mb-4 font-bold">Locate the band</h3>
      <iframe
        title="Google Map Directions"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d65130433.9278632!2d-43.94390607054806!3d4.898403370002115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xfe779fac5c85869%3A0x87b88a844980b063!2sAll%20Needs%20Supermarket%20Market%20Circle%2C%20Justmoh%20Ave%2C%20Takoradi!3m2!1d4.899992!2d-1.7628841!4m5!1s0xfe77a03ebe59619%3A0xf433382e243247a4!2sGhana%20Secondary%20Technical%20School%2C%20Takoradi!3m2!1d4.8974514!2d-1.7499269!5e0!3m2!1sen!2sgh!4v1754934749490!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg border border-gray-200"
      ></iframe>
    </div>
  );
}
