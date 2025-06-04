import '../styles/Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

return (
    <div className="pagination-container">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Anterior
        </button>
        {pages.map(page => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                // Aplicar clase 'active' si es la página actual
                className={currentPage === page ? 'active' : ''}
            >
                {page}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Siguiente
        </button>
    </div>
);
};

export default Pagination;
