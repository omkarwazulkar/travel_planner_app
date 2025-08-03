# Setup environment
FROM python:3.10-slim

# Setup directory
WORKDIR /app

# Copy only requirements.txt first from backend folder
COPY backend/requirements.txt .

# Install required OS packages (optional but recommended)
RUN apt-get update && apt-get install -y gcc build-essential libffi-dev && apt-get clean

# Install Python packages
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Now copy the rest of the backend
COPY backend/ .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
