# Generated by Django 4.1.7 on 2023-03-30 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="password",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
