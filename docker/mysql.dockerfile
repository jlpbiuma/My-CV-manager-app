# Use an official MySQL runtime as a parent image
FROM mysql:latest

# Increase the amount of RAM available to the container
ENV MYSQL_MEMORY=${MYSQL_MEMORY}

# Copy the MySQL configuration file
COPY ./my.cnf /etc/mysql/my.cnf

# Set the environment variables
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}

# Expose the MySQL port
EXPOSE ${MYSQL_INTERNAL_PORT}

# Define the startup command to run MySQL with the custom configuration
CMD ["mysqld"]
