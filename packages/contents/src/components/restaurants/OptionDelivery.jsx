import 'tailwindcss/tailwind.css';
function OptionDelivery() {
  return (
    <div className="flex">
      <div className="w-1/4 mr-4">
        <form className="mx-auto max-w-sm">
          <select
            id="countries"
            className="hover:border-green-500 focus:border-green-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option selected>Ngày giao hàng: hôm nay</option>
            <option value="Monday">Mon, 29 Apr</option>
            <option value="Tuesday">Tue, 30 Apr</option>
          </select>
        </form>
      </div>
      <div className="w-1/4">
        <form className="mx-auto max-w-sm">
          <select
            id="countries"
            className="hover:border-green-500 focus:border-green-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option selected>Thời gian giao: ngay bây giờ</option>
            <option value="1">17:00 - 17:15</option>
            <option value="2">17:00 - 17:15</option>
            <option value="3">17:00 - 17:15</option>
            <option value="4">17:00 - 17:15</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default OptionDelivery;
