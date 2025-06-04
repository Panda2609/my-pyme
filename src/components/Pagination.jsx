const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

return (
    <div style={{ marginTop: '1rem' }}>
        {pages.map(page => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
                margin: '0 5px',
                padding: '5px 10px',
                fontWeight: currentPage === page ? 'bold' : 'normal'
            }}
            >
                {page}
            </button>
        ))}
    </div>
);
};

export default Pagination;
