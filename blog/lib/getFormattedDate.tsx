export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('az-AZ', { dateStyle: 'long' }).format(new Date(dateString))
}