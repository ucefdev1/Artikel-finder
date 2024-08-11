const DativeAkkusatif = ({ article, word }) => {

  
  const getCases = (article, word) => {
    let dative = '';
    let akkusativ = '';

    switch(article) {
      case 'der':
        dative = `dem ${word}`;
        akkusativ = `den ${word}`;
        break;
      case 'die':
        dative = `der ${word}`;
        akkusativ = `die ${word}`;
        break;
      case 'das':
        dative = `dem ${word}`;
        akkusativ = `das ${word}`;
        break;
      default:
        dative = 'Unknown';
        akkusativ = 'Unknown';
    }

    return { dative, akkusativ };
  };

  // Get the Dative and Akkusativ forms
  const { dative, akkusativ } = getCases(article, word);

  return (
    <table className="min-w-full bg-black text-white border">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Case</th>
          <th className="px-4 py-2 border">Form</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">Nominative</td>
          <td className="px-4 py-2 border">{`${article} ${word}`}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Akkusativ</td>
          <td className="px-4 py-2 border">{akkusativ}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Dative</td>
          <td className="px-4 py-2 border">{dative}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DativeAkkusatif;
