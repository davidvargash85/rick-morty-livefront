import Button from "@/components/atoms/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hasNext,
  hasPrev,
}: PaginationProps) {
  return (
    <nav aria-label="Character list pagination" className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        aria-label={`Go to previous page (page ${currentPage - 1})`}
      >
        Previous
      </Button>

      <div className="flex items-center space-x-1">
        {currentPage > 2 && (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onPageChange(1)}
              aria-label="Go to page 1"
            >
              1
            </Button>
            {currentPage > 3 && <span className="px-2 text-gray-500" aria-hidden="true">...</span>}
          </>
        )}

        {currentPage > 1 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label={`Go to page ${currentPage - 1}`}
          >
            {currentPage - 1}
          </Button>
        )}

        <Button 
          variant="primary" 
          size="sm" 
          disabled
          aria-current="page"
          aria-label={`Current page, page ${currentPage} of ${totalPages}`}
        >
          {currentPage}
        </Button>

        {currentPage < totalPages && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label={`Go to page ${currentPage + 1}`}
          >
            {currentPage + 1}
          </Button>
        )}

        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && <span className="px-2 text-gray-500" aria-hidden="true">...</span>}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(totalPages)}
              aria-label={`Go to page ${totalPages}`}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        aria-label={`Go to next page (page ${currentPage + 1})`}
      >
        Next
      </Button>
    </nav>
  );
}
